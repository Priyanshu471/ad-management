import { Button } from "./ui/button";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}
const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex justify-end items-center w-full my-4 gap-x-2">
      <p className="mx-4 text-muted-foreground">
        Page {page} of {totalPages}
      </p>
      <Button
        variant={"outline"}
        className="text-primary text-base w-24 outline-primary outline-1 "
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
        disabled={page === 1}
      >
        Prev
      </Button>
      {totalPages > 1 &&
        Array.from({ length: totalPages }).map((p, i) => (
          <Button
            key={i}
            variant={"outline"}
            className={`text-primary text-base w-10 outline-primary outline-1 ${
              page === i + 1 && "bg-primary text-white"
            }`}
            onClick={() => {
              setPage(i + 1);
            }}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        variant={"outline"}
        className="text-primary text-base w-24 outline-primary outline-1 "
        onClick={() => {
          if (page < 3) setPage(page + 1);
        }}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
};
export default Pagination;
