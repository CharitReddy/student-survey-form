import "./index.css";

type MessageProps = {
  message: string;
  icon: React.ReactNode;
  type: string;
};

const Error = ({ message, icon, type }: MessageProps) => {
  return (
    <div className={`error_message ${type}`}>
      {icon}
      {message}
    </div>
  );
};

export default Error;
