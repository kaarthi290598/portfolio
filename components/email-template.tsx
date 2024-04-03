import * as React from "react";

interface EmailTemplateProps {
  email: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  description,
}) => (
  <div>
    <h1>Form submission for your portfolio</h1>
    <h3>Email: {email}</h3>
    <p>Ideas: {description}</p>
  </div>
);

// import * as React from "react";

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );
