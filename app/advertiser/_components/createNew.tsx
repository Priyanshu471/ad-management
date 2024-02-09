import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useOpen from "@/hooks/useOpen";
import PageTitle from "@/components/pageTitle";
import { campaignObjective } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import InterestSelector from "@/components/interestSelector";
import Spinner from "@/components/spinner";
import { toast } from "sonner";
import useUser from "@/hooks/useUser";

type FieldType = {
  name: string;
  label: string;
  placeholder: string;
};

const fields: FieldType[] = [
  {
    name: "title",
    label: "Title",
    placeholder: "e.g. I'm lovin' it",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "e.g. McDonald's is an American fast food company",
  },
  {
    name: "Objective",
    label: "Select objective",
    placeholder: "Select objective",
  },
];

const CreateNew = () => {
  const { setOpen } = useOpen();
  const { setError, user, userId } = useUser();
  const [loading, setLoading] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const objectiveRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (loading) {
      toast.success("Campaign created successfully");
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2000);
    }
  }, [loading]);

  const handleSubmit = async () => {
    setLoading(true);
    console.log({
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      objective: objectiveRef.current?.textContent,
      budget: budgetRef.current?.value,
      duration: durationRef.current?.value,
    });
    try {
      const res = await fetch("/api/campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current?.value,
          description: descriptionRef.current?.value,
          objective: objectiveRef.current?.textContent,
          budget: budgetRef.current?.value,
          duration: durationRef.current?.value,
          userId: userId,
        }),
      });
      if (res.ok) {
        console.log("Campaign created successfully");
        setLoading(false);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center h-full w-full">
          <div className="w-full">
            <PageTitle
              title={"Campaign info"}
              sub={"Please provide title, description, and objective."}
            />
            <form action="#" className="w-1/2">
              {fields.map(({ name, label, placeholder }) => {
                if (name !== "Objective") {
                  return (
                    <div key={name} className="my-4">
                      <label
                        htmlFor={name}
                        className="block font-medium text-primary mb-1"
                      >
                        {label}
                      </label>
                      <Input
                        placeholder={placeholder}
                        name={name}
                        ref={name === "title" ? titleRef : descriptionRef}
                        defaultValue={
                          name === "title"
                            ? titleRef.current?.value
                            : descriptionRef.current?.value
                        }
                        onChange={() => {
                          name === "title"
                            ? titleRef.current?.value
                            : descriptionRef.current?.value;
                        }}
                        className="text-lg p-4"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={name} className="mb-6">
                      <label
                        htmlFor={name}
                        className="block font-medium text-primary mb-1"
                      >
                        {name}
                      </label>
                      <SelectOption
                        optionName={label}
                        values={campaignObjective}
                        objectiveRef={objectiveRef}
                      />
                    </div>
                  );
                }
              })}
            </form>

            <PageTitle
              title={"Targeting"}
              sub={"Please provide target audience details."}
            />
            <form action="#" className="w-1/2">
              <div className="my-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  Age Range
                </label>
                <Input
                  placeholder="e.g. 18-65"
                  name="age"
                  onChange={() => {}}
                  className="text-lg p-4"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  Location
                </label>
                <div className="flex flex-col gap-y-2">
                  <SelectOption
                    optionName={"Country"}
                    values={[
                      { name: "IND", des: "India" },
                      { name: "US", des: "United States" },
                      { name: "UK", des: "United Kingdom" },
                      { name: "CA", des: "Canada" },
                    ]}
                  />
                  <SelectOption
                    optionName={"Region"}
                    values={[
                      { name: "Urban", des: "Metro cities" },
                      { name: "Suburban", des: "Small cities" },
                      { name: "Rural", des: "Villages" },
                    ]}
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  Income Range
                </label>
                <Input
                  placeholder="e.g. ₹50,000"
                  name="income"
                  onChange={() => {}}
                  className="text-lg p-4"
                />
              </div>
              <div className="my-6">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  {" "}
                  Interest{" "}
                </label>
                <InterestSelector />
              </div>
            </form>

            <PageTitle
              title={"Budget & Duration"}
              sub={"Please provide budget and duration details."}
            />

            <span className="text-sm text-primary">
              The budget will be divided equally for the duration of the
              campaign.
            </span>
            <form action="#" className="w-1/2 mb-6">
              <div className="my-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  Budget
                </label>
                <Input
                  placeholder="e.g. ₹50,000"
                  name="budget"
                  ref={budgetRef}
                  defaultValue={budgetRef.current?.value}
                  onChange={() => {
                    budgetRef.current?.value;
                  }}
                  className="text-lg p-4"
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="title"
                  className="block font-medium text-primary mb-1"
                >
                  Duration
                </label>
                <Input
                  placeholder="e.g. 30 days"
                  name="duration"
                  ref={durationRef}
                  defaultValue={durationRef.current?.value}
                  onChange={() => durationRef.current?.value}
                  className="text-lg p-4"
                />
              </div>
            </form>

            <PageTitle
              title="File Uploads"
              sub="Please provide multimedia content for the campaign."
            />
            <div className="flex items-center justify-center w-1/2 bg-white rounded-lg">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-primary">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Image,logo or video (MAX. 10MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="flex gap-x-4 my-6 w-full justify-end">
              <Button
                variant={"secondary"}
                className="flex items-center gap-x-2 w-36 text-lg"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant={"primary"}
                className="flex items-center gap-x-2 w-36 text-lg"
                onClick={handleSubmit}
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNew;

// This is the SelectOption component
interface SelectOptionProps {
  optionName: string;
  values: { name: string; des: string }[];
  objectiveRef?: React.RefObject<HTMLDivElement>;
}

const SelectOption = ({
  optionName,
  values,
  objectiveRef,
}: SelectOptionProps) => {
  const [description, setDescription] = useState<string>("Description");
  const handleSelect = (value: string) => {
    setDescription(values.find((v) => v.name === value)?.des || "Description");
    if (objectiveRef?.current instanceof HTMLDivElement) {
      objectiveRef.current.textContent = value ?? "";
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Select onValueChange={handleSelect}>
        <SelectTrigger className=" p-4 text-lg">
          <SelectValue
            placeholder={optionName}
            className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="grid grid-cols-3 pb-4 pr-4">
            {values.map((value, i) => (
              <SelectItem
                ref={objectiveRef as React.RefObject<HTMLDivElement>}
                key={value.name}
                value={value.name}
                className=" text-[17px] m-2 h-full"
              >
                {value.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea
        value={description}
        className={cn(
          "text-base",
          description === "Description" ? "text-slate-400" : "text-black-2"
        )}
        readOnly
      />
    </div>
  );
};
