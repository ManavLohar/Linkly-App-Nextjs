import { use } from "react";

const Meeting = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return <div>Meeting Room: #{id}</div>;
};

export default Meeting;
