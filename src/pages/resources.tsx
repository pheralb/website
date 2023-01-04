import { useEffect, useState } from "react";
import { resources } from "@/data/resources";

import PageSection from "@/components/pageSection";

import { CardUrl } from "@/ui/card";
import CustomContainer from "@/ui/container";
import Tag from "@/ui/tag";

const Stack = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories = resources
      .map((resource) => resource.category)
      .filter((category, index, array) => array.indexOf(category) === index);
    setAllCategories(["all", ...categories]);
  }, [resources]);

  return (
    <CustomContainer>
      <PageSection title="Resources" />
      <div className="flex flex-wrap gap-2">
        {allCategories.length > 0 &&
          allCategories.map((category) => (
            <Tag
              className={
                category === selectedCategory ? "border-neutral-600 dark:border-neutral-500 duration-150" : ""
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Tag>
          ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
        {selectedCategory === "all"
          ? resources.map((font) => (
              <CardUrl
                key={font.name}
                title={font.name}
                url={font.url}
                description={font.description}
                image={font.img}
              />
            ))
          : resources
              .filter((font) => font.category === selectedCategory)
              .map((font) => (
                <CardUrl
                  key={font.name}
                  title={font.name}
                  url={font.url}
                  description={font.description}
                  image={font.img}
                />
              ))}
      </div>
    </CustomContainer>
  );
};

export default Stack;
