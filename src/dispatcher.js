export default function emitEvent(name, details) {
  dispatchEvent(
    new CustomEvent(name, {
      detail: details
    })
  )
}