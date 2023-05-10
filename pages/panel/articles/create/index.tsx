import { FilePond } from "react-filepond";
import { ChangeEvent, useState, useRef } from "react";

import Header from "../../../head";
import { styles } from "../../../../styles";
import CreateArticlePreview from "../../../../components/articles/preview";
import Access from "../../../../components/access";
import CreateArticleControllers from "../../../../components/articles/controllers";
import { PanelLayout } from "../../../../components/layout";

import "filepond/dist/filepond.min.css";

function CreateArticles() {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const [content, setContent] = useState<string>(``);

  const [preview, setPreview] = useState<boolean>(false);

  const [uploadArticleImage, setUploadArticleImage] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");

  const [cover, setCover] = useState<any>();

  const [images, setImages] = useState<any>();

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
  return (
    <Access admin author>
      <div className="p-4 space-y-4 rounded-xl box-shadow">
        <Header title="IRTC	• ایجاد کردن مقاله" />

        <input
          type={"text"}
          name={"title"}
          placeholder={"عنوان مقاله"}
          onChange={titleHandler}
          className="p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl outline-none invalid:border-2 invalid:border-red-600"
        />

        <FilePond
          files={cover}
          onupdatefiles={setCover}
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

      <div className="mt-4 p-4 rounded-xl box-shadow sticky" data-color-mode="light">
        <CreateArticleControllers
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

      <div className="my-4 flex items-center gap-x-3">
        <button className={`${styles.primaryButton} disabled:opacity-50 py-3 px-10 hover:scale-[1.05]`}>
          منتشر کردن مقاله
        </button>

        <button onClick={previewHandler} className={`${styles.primaryButton} py-3 px-6 hover:scale-[1.05]`}>
          پیش نمایش
        </button>
      </div>

      {preview && <CreateArticlePreview title={title} content={content} />}

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

CreateArticles.PageLayout = PanelLayout;

export default CreateArticles;
