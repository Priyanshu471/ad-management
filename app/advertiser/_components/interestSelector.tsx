import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterestsData } from "@/lib/data";
import { ChangeEvent, useState } from "react";

const InterestSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedTopic(""); // Reset the selected topic when the category changes
  };

  const handleTopicChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div>
      <Select
        value={selectedCategory}
        onValueChange={(value) => {
          setSelectedCategory(value);
          setSelectedTopic("");
        }}
      >
        <SelectTrigger className="text-lg p-4">
          <SelectValue
            placeholder="Select Category"
            className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="grid grid-cols-4 pb-4 pr-4">
            {Object.keys(InterestsData).map((category) => (
              <SelectItem
                key={category}
                value={category}
                className="text-[17px] m-2 h-full"
              >
                {category[0].toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {selectedCategory && (
        <div className="my-4">
          <label
            htmlFor="topic"
            className="block font-medium text-primary mb-1"
          >
            Select Topic
          </label>
          <Select
            value={selectedTopic}
            onValueChange={(value) => setSelectedTopic(value)}
          >
            <SelectTrigger className="text-lg p-4">
              <SelectValue
                placeholder="Select Topic"
                className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="grid grid-cols-4 pb-4 pr-4">
                {InterestsData[selectedCategory].map((topic) => (
                  <SelectItem
                    key={topic}
                    value={topic}
                    className="text-[17px] m-2 h-full"
                  >
                    {topic}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
export default InterestSelector;
