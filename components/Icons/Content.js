import React from 'react';

export const Content = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.484 12.5963L20.984 5.48018C20.6943 3.92768 19.5787 3.00097 18 3.00097H5.99998C5.21248 3.00097 4.54685 3.22081 4.02654 3.6544C3.50623 4.088 3.16545 4.70018 3.01498 5.47737L1.51498 12.5963C1.50485 12.6472 1.49982 12.699 1.49998 12.751V18.001C1.49998 18.7966 1.81605 19.5597 2.37866 20.1223C2.94127 20.6849 3.70433 21.001 4.49998 21.001H19.5C20.2956 21.001 21.0587 20.6849 21.6213 20.1223C22.1839 19.5597 22.5 18.7966 22.5 18.001V12.751C22.4998 12.699 22.4945 12.6472 22.484 12.5963ZM4.48404 5.78065C4.48404 5.77597 4.48404 5.77175 4.48404 5.76753C4.65045 4.90362 5.13139 4.5019 5.99763 4.5019H18C18.8723 4.5019 19.3533 4.90268 19.5126 5.76331C19.5126 5.7694 19.515 5.7755 19.5159 5.78159L20.7783 11.776C20.784 11.8033 20.7835 11.8315 20.7769 11.8586C20.7704 11.8858 20.7578 11.9111 20.7402 11.9327C20.7226 11.9544 20.7004 11.9718 20.6752 11.9838C20.65 11.9957 20.6224 12.0019 20.5945 12.0019H15C14.8022 12.0009 14.6122 12.0784 14.4715 12.2175C14.3309 12.3565 14.2512 12.5457 14.25 12.7435C14.25 13.3402 14.0129 13.9125 13.591 14.3345C13.169 14.7564 12.5967 14.9935 12 14.9935C11.4032 14.9935 10.8309 14.7564 10.409 14.3345C9.98703 13.9125 9.74998 13.3402 9.74998 12.7435C9.74949 12.6455 9.7297 12.5485 9.69174 12.4582C9.65378 12.3678 9.5984 12.2858 9.52876 12.2169C9.45911 12.1479 9.37657 12.0934 9.28584 12.0563C9.19511 12.0193 9.09798 12.0005 8.99998 12.001H3.40545C3.37754 12.001 3.34998 11.9948 3.32478 11.9828C3.29957 11.9709 3.27736 11.9534 3.25975 11.9318C3.24214 11.9101 3.22959 11.8848 3.22301 11.8577C3.21643 11.8306 3.21598 11.8023 3.2217 11.775L4.48404 5.78065Z"
        fill={color}
      />
      <path
        d="M17.25 7.50022H6.75001C6.55109 7.50022 6.36033 7.4212 6.21968 7.28055C6.07902 7.13989 6.00001 6.94913 6.00001 6.75022C6.00001 6.5513 6.07902 6.36054 6.21968 6.21989C6.36033 6.07923 6.55109 6.00022 6.75001 6.00022H17.25C17.4489 6.00022 17.6397 6.07923 17.7803 6.21989C17.921 6.36054 18 6.5513 18 6.75022C18 6.94913 17.921 7.13989 17.7803 7.28055C17.6397 7.4212 17.4489 7.50022 17.25 7.50022Z"
        fill={color}
      />
      <path
        d="M18 10.5009H6.00001C5.8011 10.5009 5.61033 10.4219 5.46968 10.2813C5.32903 10.1406 5.25001 9.94983 5.25001 9.75092C5.25001 9.55201 5.32903 9.36124 5.46968 9.22059C5.61033 9.07994 5.8011 9.00092 6.00001 9.00092H18C18.1989 9.00092 18.3897 9.07994 18.5303 9.22059C18.671 9.36124 18.75 9.55201 18.75 9.75092C18.75 9.94983 18.671 10.1406 18.5303 10.2813C18.3897 10.4219 18.1989 10.5009 18 10.5009Z"
        fill={color}
      />
    </svg>
  );
};

export default Content;