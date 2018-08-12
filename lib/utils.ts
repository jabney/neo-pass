
export function typeOf(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

