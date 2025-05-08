'use client'

import { useState, useEffect } from 'react'
import ReactIcon from '@/components/icons/react-icon'
import { CodeEditor } from '@/components/animate-ui/components/code-editor'

export const CodeEditorDemo = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        // If the component is visible
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Disconnect the observer after it's visible
          observer.disconnect()
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    )

    // Get the contact section element
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      observer.observe(contactSection)
    }

    return () => {
      // Clean up the observer on component unmount
      observer.disconnect()
    }
  }, [])

  return (
    <CodeEditor
      cursor
      className="w-full h-[480px] md:h-[550px] lg:h-[550px]"
      lang="tsx"
      title="component.tsx"
      icon={<ReactIcon className="text-white/70" />}
      duration={15}
      delay={isVisible ? 0.5 : 999999} // Only start typing when visible
      copyButton
    >
      {`'use client';
 
import * as React from 'react';
 
type MyComponentProps = {
  myProps: string;
} & React.HTMLAttributes<HTMLDivElement>;
 
const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ myProps, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <p>My Component</p>
      </div>
    );
  },
);
MyComponent.displayName = 'MyComponent';
 
export { MyComponent, type MyComponentProps };`}
    </CodeEditor>
  )
}

export default CodeEditorDemo
