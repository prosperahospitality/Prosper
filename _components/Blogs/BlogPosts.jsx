"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Check, Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const BlogPost = ({ params }) => {

  console.log(params.id, "params");

  const router = useRouter();

  const [post, setPost] = useState(null);
  console.log(post, "post");

  useEffect(() => {
    async function getData() {
      const response = await axios.post("/api/blog/blogfetch", {
        operation: "fetchsinglejob",
        _id: params.id,
      })
      console.log(response.data.fetchsingleblog, "check blog");
      setPost(response.data.fetchsingleblog);
    }
    getData();

  }, [params.id])

  const handleBack = () => {
    router.back();
  };

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="container mx-auto border my-10 w-[95%] lg:w-[80%] p-8">
      <div className="text-gray-600 mb-2 flex justify-between">
        <div>
          <span>{post.writer}</span> | <span> {new Date(post.date).toLocaleDateString()}</span> |{" "}
          <span>{post.readTime}</span>
        </div>
        <Button
          onClick={handleBack}
          variant="ghost"
          color="primary"
          radius="full"
          startContent={<Undo2 />}
        >
          Back
        </Button>
      </div>
      <h1 className="text-[#006FEE] text-3xl lg:text-4xl mb-4 texxt-center font-bold">
        {post.title}
      </h1>
      <div className="flex justify-center items-center mb-4 w-full ">
        <Image
          src={post.image.url}
          alt={post.title}
          width={800}
          height={500}
          objectFit="cover"
        />
      </div>
      <p className="mb-4 font-extralight text-black/80 text-center">{post.title}</p>
      {post.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl text-black mb-2 font-semibold">
            {section.sectionheading}
          </h2>
          {section.sectioncontent && section.sectioncontent.map((content, contentIndex) => (
            <p key={contentIndex} className="font-extralight text-black/80 mb-4 text-lg">
              {content.sectioncontentone}
            </p>
          ))}
          {section.quote && (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 text-2xl my-5 py-2">
              {section.quote}
            </blockquote>
          )}
          {section.list && (
            <div className="list-disc list-inside mb-4">
              {section.list.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="font-extralight text-black/80 text-lg flex"
                >
                  {item.listone && <Check />}
                  <span className={item.listone ? "ml-2" : ""}>{item.listone}</span>
                </div>
              ))}
            </div>
          )}

          {section.tableheader && (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-lg">
                      {section.tableheader}
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider text-lg">
                      {section.tabledescription}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {section.tableheaderone.map((header, headerIndex) => (
                    <tr key={headerIndex}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {header.tableheading}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {section.tabledescriptionone[headerIndex]?.tabledescriptionpara}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
      <Button
        onClick={handleBack}
        variant="ghost"
        color="primary"
        radius="full"
        startContent={<Undo2 />}
      >
        Back
      </Button>
    </div>
  );
};

export default BlogPost;
