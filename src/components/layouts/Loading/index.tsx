import { ReactNode } from 'react';

const TemplateLoading = ({
  children,
  loading,
}: {
  loading: boolean;
  children: ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );

export default TemplateLoading;
