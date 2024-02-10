type StatusProps = {
  status: "Active" | "End" | "Live" | "Deleted";
};
const Status = ({ status }: StatusProps) => {
  return (
    <div className="flex items-center justify-center p-2.5 xl:p-5">
      <p
        className={` px-3 py-0.5 rounded-full  ${
          status === "Active" || status === "Live"
            ? "text-meta-3 bg-meta-3/10"
            : "text-meta-1 bg-meta-1/10"
        } ${status === "Deleted" && "text-meta-4 bg-meta-4/10"}`}
      >
        {status}
      </p>
    </div>
  );
};

export default Status;
