import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { useEffect, useState } from "react";
import { resourcesApi } from "@/data/resources";
import type { iResources } from "@/data/dataInterface";

import PageSection from "@/components/pageSection";

import { CardUrl } from "@/ui/card";
import CustomContainer from "@/ui/container";
import Tag from "@/ui/tag";

const Resources = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories = data
      .map((resource: iResources) => resource.category)
      .filter((category: string, index: number, self: string[]) => {
        return self.indexOf(category) === index;
      });
    setAllCategories(["all", ...categories]);
  }, [data]);

  return (
    <CustomContainer>
      <PageSection title="Resources" />
      <div className="flex flex-wrap gap-2">
        {allCategories.length > 0 &&
          allCategories.map((category) => (
            <Tag
              className={
                category === selectedCategory
                  ? "border-neutral-600 dark:border-neutral-500 duration-150"
                  : ""
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Tag>
          ))}
      </div>
      <div className="mt-8">
        {selectedCategory === "all"
          ? data.map((resource: iResources) => (
              <CardUrl
                key={resource.title}
                title={resource.title}
                url={resource.url}
                description={resource.description}
                image={`${resourcesApi}${resource.img}`}
                className="mb-3"
              />
            ))
          : data
              .filter(
                (resource: iResources) => resource.category === selectedCategory
              )
              .map((resource: iResources) => (
                <CardUrl
                  key={resource.title}
                  title={resource.title}
                  url={resource.url}
                  description={resource.description}
                  image={`${resourcesApi}${resource.img}`}
                  className="mb-3"
                />
              ))}
      </div>
    </CustomContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(resourcesApi);
  const data: iResources[] = await res.json();
  return { props: { data } };
};

export default Resources;
