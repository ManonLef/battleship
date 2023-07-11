export default function emitEvent(name, details) {
  dispatchEvent(
    new CustomEvent(name, {
      detail: details
    })
  )
  // remove the function body before testing until I
  // implement a dom environment or mock
}
