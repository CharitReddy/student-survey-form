import "./index.css";

type MessageProps = {
  message: string;
  iconCode: string;
  type: string;
};

const Error = ({ message, iconCode, type }: MessageProps) => {
  return (
    <div className={`error_message ${type}`}>
      &#10004; &#9888;
      {message}
    </div>
  );
};

export default Error;
