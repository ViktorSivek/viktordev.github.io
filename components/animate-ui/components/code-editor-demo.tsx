'use client'

import ReactIcon from '@/components/icons/react-icon'
import { CodeEditor } from '@/components/animate-ui/components/code-editor'

export const CodeEditorDemo = () => {
  return (
    <CodeEditor
      cursor
      className="w-full h-[480px] md:h-[550px]"
      lang="tsx"
      title="component.tsx"
      icon={<ReactIcon />}
      duration={15}
      delay={0.5}
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
