"use client";

import Image from "next/image";
import { FilePond } from "react-filepond";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useRef } from "react";

import {
  CreateArticleTools,
  ArticlePanelEditingPreview,
} from "@/features/articles/panel";
import { Access } from "@/components";

import { axiosPrivate } from "@/configs/axios";
import { checkConnectivity } from "@/utils/checkConnection";
import { estimateReadTimeHandler } from "@/utils/estimateReadTime";

import { styles } from "@/styles";

import "@/styles/filepond.css";
import "filepond/dist/filepond.min.css";

function CreateArticle() {
  const router = useRouter();

  const [error, setError] = useState<{
    title?: string;
    message: string;
  } | null>(null);
  const [cover, setCover] = useState<any>();
  const [images, setImages] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [coverFile, setCoverFile] = useState<any>();
  const [content, setContent] = useState<string>(``);
  const [preview, setPreview] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>("");
  const [description, setDescription] = useState<string>("");
  const [uploadArticleImage, setUploadArticleImage] = useState<boolean>(false);

  const textRef = useRef<HTMLTextAreaElement>(null);

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const previewHandler = () => {
    setPreview((prevValue) => !prevValue);
  };

  const uploadArticleImageHandler = () => {
    setUploadArticleImage((prevValue) => !prevValue);
  };

  const EditorCommandHandler = (command: void) => {
    command;

    setContent(textRef.current!.value);
  };

  const createArticleHandler = async () => {
    const slug = title.replaceAll(" ", "-");

    if (title === "" || !title) {
      setError({
        message: "لطفا عنوانی برای مقاله خود انتخاب کنید.",
        title: "title",
      });
      return;
    } else if (description === "" || !description) {
      setError({
        message: "لطفا توضیح کوتاهی برای مقاله خود انتخاب کنید.",
        title: "description",
      });
      return;
    } else if (description === "" || !description) {
      setError({ message: "لطفا توضیح کوتاهی برای مقاله خود بنویسید." });
      return;
    } else if (content === "" || !content) {
      setError({ message: "لطفا محتوایی برای مقاله خود بنویسید." });
      return;
    }

    setError(null);

    const article = {
      slug: slug,
      title: title,
      content: content,
      description: description,
      readTime: estimateReadTimeHandler(content),
      cover:
        "https://sabzlearn.ir/wp-content/uploads/2023/12/IMAGE-1402-09-30-20_33_36-1.webp",
    };

    const isConnected = await checkConnectivity();

    if (isConnected) {
      try {
        const response = await axiosPrivate.post(
          "/articles/create",
          JSON.stringify(article),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (response.status)
          setMessage(response.data.message), setError(null), router.push(slug);
      } catch (err: any) {
        setMessage(null);

        const statusCode = err.response?.status;

        if (statusCode === 403) {
          setError({ message: "شما سطح دسترسی به قابلیت رو ندارید" });
        } else if (statusCode === 502) {
          setError({ message: "از سمت دیتابیس مشکلی پیش اومد" });
        } else if (statusCode === 400) {
          setError({
            message:
              "اطلاعات کامل وارد نشده است یا قبلا با این موضوع مقاله ای ایجاد شده است.",
          });
        } else {
          setError({ message: "مشکلی از سمت دیتابیس پیش اومد." });
        }
      }
    }
  };

  return (
    <Access admin author>
      <div className="p-4 space-y-4 rounded-xl shadow-dark">
        <title>IRTC • ایجاد کردن مقاله</title>

        <input
          type={"text"}
          name={"title"}
          placeholder={"عنوان مقاله"}
          onChange={titleHandler}
          className={`p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary justify-start rounded-xl outline-none ${
            error?.title === "title" && "border-2 border-red-600"
          } resize-none`}
        />

        <textarea
          placeholder={"توضیح کوتاهی از مقاله یا چرا باید این مقاله را بخوانند"}
          onChange={descriptionHandler}
          className={`p-3 w-full h-[7rem] text-sm md:text-base text-secondary bg-dim-secondary justify-start rounded-xl outline-none ${
            error?.title === "description" && "border-2 border-red-600"
          } resize-none`}
          maxLength={200}
        />
        <FilePond
          files={coverFile}
          chunkUploads={true}
          allowMultiple={false}
          onupdatefiles={setCoverFile}
          labelIdle='عکس های خود را بکشید و رها کنید یا <span class="filepond-action">کلیک کنید</span>.'
          onremovefile={() => {
            setCover(null);
          }}
          server={{
            process: {
              url: "https://api.cloudinary.com/v1_1/dpuwpqd0c/image/upload",
              onerror: (error: any) => {
                console.log(error);
              },
              ondata: (data: any) => {
                data.append("file", coverFile[0]?.file);
                data.append("could_name", "dpuwpqd0c");
                data.append("upload_preset", "chat-app");
                return data;
              },
              onload: (state: any) => {
                console.log(state);
                setCover(JSON.parse(state).url);
                return 0;
              },
            },
          }}
        />

        {cover && (
          <Image
            src={cover}
            alt={title}
            width={1000}
            height={600}
            className="w-full max-h-[25rem] object-cover rounded-xl"
          />
        )}
      </div>

      <div
        className="mt-4 p-4 rounded-xl shadow-dark sticky"
        data-color-mode="light"
      >
        <CreateArticleTools
          textRef={textRef}
          EditorCommandHandler={EditorCommandHandler}
          setUploadArticleImage={setUploadArticleImage}
        />

        <textarea
          name=""
          id="textareatest"
          ref={textRef}
          className="mt-3 p-2 w-full min-h-[27.5rem] resize-none outline-none border-t-2 border-dim-secondary"
          placeholder="متن مقاله ی خود را در اینجا بنویسید..."
          onChange={(e: any) => {
            setContent(e.target.value);
          }}
        />
      </div>

      {message && (
        <p className="mt-3 mb-1 p-3 bg-green-100 text-green-600 rounded-md">
          {message}
        </p>
      )}

      {error && (
        <p className="mt-3 mb-1 p-3 bg-red-100 text-red-600 rounded-md">
          {error.message}
        </p>
      )}

      <div className="my-4 flex items-center gap-x-3">
        <button
          className={`${styles.primaryButton} disabled:opacity-50 py-3 px-10 hover:scale-[1.05]`}
          onClick={createArticleHandler}
        >
          منتشر کردن مقاله
        </button>

        <button
          onClick={previewHandler}
          className={`${styles.primaryButton} py-3 px-6 hover:scale-[1.05]`}
        >
          پیش نمایش
        </button>
      </div>

      {preview && (
        <ArticlePanelEditingPreview
          title={title}
          content={content}
          previewHandler={previewHandler}
        />
      )}

      {uploadArticleImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <button
            onClick={(e: any) => {
              uploadArticleImageHandler();
            }}
            className="fixed top-0 left-0 w-full h-full bg-primary opacity-90"
          />
          <div className="w-full lg:w-fit max-w-[90%] min-w-[50%] grid items-center">
            <FilePond
              files={images}
              onupdatefiles={setImages}
              allowMultiple={false}
              labelIdle='عکس های خود را بکشید و رها کنید یا <span class="filepond-action">کلیک کنید</span>.'
              // server={{
              //   process: {
              //     url: "https://api.upload.io/v2/accounts/W142hrD/uploads/binary",
              //     headers: {
              //       Authorization: " Bearer public_W142hrD6cMFKNSEmK4YbMZFVFVX1",
              //     },
              //     onload: (response): any => {
              //       console.log(response);
              //     },
              //   },
              // }}
            />
          </div>
        </div>
      )}
    </Access>
  );
}

export default CreateArticle;
