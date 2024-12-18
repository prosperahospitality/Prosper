"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Blogs = () => {

  const router = useRouter()

  const [fetchallblog, setfetchallleblog] = useState([]);
  console.log(fetchallblog, "fetchallblog");

  useEffect(() => {
    async function getdata() {
      const response = await axios.post("/api/blog/blogfetch", {
        operation: "fetchallblog",
      });
      console.log(response.data.fetchsingleblog, "fetch single blog");
      setfetchallleblog(response.data.fetchsingleblog)
    }
    getdata()
  }, [])

  return (
    <>
      <section className="w-[100%] mx-auto px-8 pt-10">
        <h1 className="text-4xl font-extralight text-center text-[#006FEE]">
          Latest blog posts
        </h1>
        <div className="my-10 grid gap-6 lg:grid-cols-1 lg:w-[80%] mx-auto">
          {fetchallblog.slice(0, 1).map((post) => (
            <div key={post._id}>
              <div className="w-full h-full rounded-xl border border-blue-500 overflow-hidden lg:flex">
                <div className="flex justify-center items-center lg:w-1/2 w-full h-56 lg:h-full">
                  <Image
                    src={post.image.url}
                    alt={post.title}
                    width={800}
                    height={500}
                    objectFit="cover"
                  />
                </div>

                <div className="lg:w-1/2">
                  <div className="p-6">
                    <div className="flex justify-start items-center gap-3 mt-3">
                      <p className="text-base font-extralight text-gray-500">
                        {new Date(post.date).toLocaleDateString()} - {post.readTime}
                      </p>
                    </div>
                    <h2 className="mt-6 text-2xl font-extralight text-[#006FEE]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-black/80 line-clamp-3">{post.intro}</p>
                    <Link
                      href={`/blogs/${post._id}`}
                      className="mt-6 inline-block px-4 py-2 border-blue-500 shadow-2xl border rounded text-blue-500 font-extralight tracking-wide hover:bg-blue-500 hover:text-white"
                    >
                      Read more
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[100%] mx-auto px-8 py-10">
        <h1 className="text-4xl font-extralight text-center text-[#006FEE]">
          Recent blog posts
        </h1>
        <div className="my-10 grid gap-6 lg:grid-cols-2 lg:w-[80%] mx-auto">
          {fetchallblog.slice(1).map((post) => (
            <div key={post._id}>
              <div className="rounded-xl border border-blue-500 overflow-hidden">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  width={800}
                  height={500}
                  objectFit="cover"
                />
                <div>
                  <div className="p-6">
                    <div className="flex justify-start items-center gap-3 mt-3">
                      <p className="text-base font-extralight text-gray-500">
                        {new Date(post.date).toLocaleDateString()} - {post.readTime}
                      </p>
                    </div>
                    <h2 className="mt-6 text-2xl font-extralight text-[#006FEE]">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-black/80 font-extralight line-clamp-3">{post.intro}</p>
                    <div
                      className="mt-6 inline-block px-4 py-2 border-blue-500 shadow-2xl border rounded text-blue-500 font-semibold tracking-wide hover:bg-blue-500 hover:text-white"
                      onClick={() => router.push(`/blogs/${post._id}`)}
                    >
                      Read more
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
