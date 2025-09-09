import React from 'react';

const CodeBlock = () => {
  const code = `
const superpower = () => "Writing clean, efficient, and user-friendly code!";
console.log(\`My superpower is: \${superpower()}\`);
  `.trim();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto shadow-lg">
        <code className="text-sm font-mono">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
