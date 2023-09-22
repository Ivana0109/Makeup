import { useCallback, useRef } from "react"

const useIntersectionObserver = (cb:IntersectionObserverCallback, options?:IntersectionObserverInit | undefined) => {
    const observer = useRef<IntersectionObserver | null>(null)
  
    return useCallback((node: any) => {
      if (!node) {
        if (observer.current) {
          observer.current.disconnect()
        }
        return
      }
  
      observer.current = new window.IntersectionObserver(cb, options)
      observer.current.observe(node)
    }, [cb,options])

  }

  export default useIntersectionObserver