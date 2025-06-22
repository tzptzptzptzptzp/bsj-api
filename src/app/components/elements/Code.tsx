export const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm">
      {children}
    </code>
  );
};
