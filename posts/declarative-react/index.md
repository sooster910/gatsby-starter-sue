---
title: Declarative UI in React <공식문서 참고>
slug: declarative-react
author: Hyunsu Joo
published: 2023-04-15
lastUpdated: 2021-04-15
draft: false
image: ./cross_browsing.png
imageAlt: cross_browsing
tags: ['Web Development']
---

리액트 공식문서를 참고하여 의역한 부분과 조금 쉽게 풀어보았습니다

## How declarative UI compares to imperative

먼저 명령형 볼게요. 다음과 같은 UI 인터랙션이 있다고 생각해보세요.

- form 에 무언가를 입력하면 "제출" 버튼이 활성화됩니다.
- "제출" 버튼을 누르면 폼과 버튼이 비활성화되고 로딩 스피너가 나타납니다.
- 네트워크 요청이 성공하게 되면 form이 숨겨지고 "감사합니다" 메시지를 보여줍니다.
- 네트워크 요청이 실패하면 오류 메시지를 보여주고 폼이 다시 활성화됩니다.

명령형 프로그래밍에선, 위에서 이야기한 부분들이 바로 인터랙션을 구현하는 방법과 직접적으로 일치합니다. 은 상호 작용을 구현하는 방법과 직접적으로 일치합니다. 명령형 프로그래밍은 UI를 조작하기 위해 일어난 일에 대해 정확한 가이드를 줘야 합니다. 운전하는 사람 옆에 타면서 어디로 가야 하는지 알려주는 것을 생각해보면 이것도 명령형 프로그래밍과 같은 방법입니다. UI에서는 개발자가 만든 명령의 순서에 따라 UI 가 업데이트 됩니다. 리액트 공식 문서에서의 명령형 UI 프로그래밍 예제 코드입니다.

```jsx
async function handleFormSubmit(e) {
  e.preventDefault()
  disable(textarea)
  disable(button)
  show(loadingMessage)
  hide(errorMessage)
  try {
    await submitForm(textarea.value)
    show(successMessage)
    hide(form)
  } catch (err) {
    show(errorMessage)
    errorMessage.textContent = err.message
  } finally {
    hide(loadingMessage)
    enable(textarea)
    enable(button)
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button)
  } else {
    enable(button)
  }
}

function hide(el) {
  el.style.display = 'none'
}

function show(el) {
  el.style.display = ''
}

function enable(el) {
  el.disabled = false
}

function disable(el) {
  el.disabled = true
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() == 'istanbul') {
        resolve()
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'))
      }
    }, 1500)
  })
}

let form = document.getElementById('form')
let textarea = document.getElementById('textarea')
let button = document.getElementById('button')
let loadingMessage = document.getElementById('loading')
let errorMessage = document.getElementById('error')
let successMessage = document.getElementById('success')
form.onsubmit = handleFormSubmit
textarea.oninput = handleTextareaChange
```

소스코드를 보면 명령형에서 DOM에 직접 접근하여 DOM API를 사용하여 처리하고 있습니다. 그리고 상태에 따라 텍스트 상자, 버튼, 에러메시지, 적재메시지 들이 각각 어떻게 해야 하는지 직접 써줘야 합니다.

명령형 코드로도 충분히 잘 작동되는 건 사실입니다. 하지만 복잡한 시스템 내에선 관리하기가 기하급수적으로 힘들어집니다. 현재 만들어진 서식과 같은 새로운 서식을 추가한다거나 새로운 상호작용이 생긴다면 기존 코드를 다시 찬찬히 살펴 새로운 버그가 생기진 않았는지 확인해야 합니다.

이 부분을 해결하기 위해 리액트가 만들어졌습니다.

리액트에서는 이렇게 직접 UI를 조작하지 않습니다. 즉, 컴포넌트를 enable/disable, show/hidden 하지 않고 보여주고 싶은 것을 선언합니다.

선언이라는 단어가 나왔습니다.

아까 위에서 이야기한 운전하는 사람 옆에서 여기 또는 저기로 가야 한다고 방향을 직접적 이야기하는 명령형 프로그래밍과는 다르게 선언형 프로그래밍은 택시 기사 옆에 앉아 어디로 가주세요. 라고 말하는 것과 같습니다.

목적지에 어떻게 갈지 생각하는 사람은 택시 기사이고, 이 택시기사는 오히려 어떻게 하면 더 일찍 도착할지 대한 효율적인 방법을 알 수 있습니다.

그럼 코드로는 어떻게 선언적으로 나타낼 수 있을까?

리액트에서는 어떤 주어진 상태 표현에 대해 UI를 설명합니다.

```jsx
import { useState } from 'react'

export default function Form() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typing')

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  )
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'))
      } else {
        resolve()
      }
    }, 1500)
  })
}
```

```jsx
async function handleSubmit(e) {
  e.preventDefault()
  setStatus('submitting')
  try {
    await submitForm(answer)
    setStatus('success')
  } catch (err) {
    setStatus('typing')
    setError(err)
  }
}
```

- button 요소의 경우 상태를 이용하여 버튼의 상태가 submitting과 같거나 answer의 길이가 아직 0 이라면 disabled 처리합니다. 상태는 어디서 변경되는 걸까요?

- submit 버튼을 누른 직 후를 담당하는 코드는 명령형과는 다르게 상태를 세팅합니다. 각각의 단계에 따라 다른 상태가 세팅됩니다. (submit ting / success/ typing )

- dom 에 직접 이렇게 하라 저렇게 하러 가 아닌, 상태가 이럴 땐 이렇게 해주라고 리액트에게 이야기하고 리액터가 UI를 업데이트하는 방법을 알아냅니다. 위에서 언급한 택시기사가 리액터로 간주할 수 있을 것 같습니다. 또한 리액터가 어떻게 하면 UI를 빨리 업데이트할지도 알아냅니다.

- 선언형 코드가 명령형 예제 코드 보다 길지만, 훨씬 덜 취약합니다. 모든 상호 작용을 상태 변경으로 표현하면 나중에 기존 상태를 손상하지 않고 새로운 시각적 상태를 도입할 수 있습니다. 또한, 상호 작용 자체의 논리를 변경하지 않고도 각 상태에 표시되어야 하는 항목을 변경할 수 있습니다.
