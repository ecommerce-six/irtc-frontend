import dynamic from "next/dynamic";
import { ChangeEvent, useState, Suspense } from "react";

import { useMutate } from "restful-react";
import Access from "../../../../components/access";
import { PanelLayout } from "../../../../components/layout";

import { articleType } from "../../../../types/article";

import { styles } from "../../../../styles";

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default), { ssr: false });

function CreateArticles() {
  const [value, setValue] = useState<string | undefined>("");

  const [title, setTitle] = useState<string>("");

  const titleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [article, setArticle] = useState<articleType>({
    slug: "/",
    title: "ری اکت در دنیای واقعی",
    description: "",
    cover: "",
    content: value,
    readTime: "8 دقیقه",
    likesCount: 169,
    comments: [{}, {}],
    rate: 4.5,
    time: "5 روز پیش",
  });

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const { mutate: uploadImage } = useMutate<any>({
    verb: "POST",
    path: "http://freeimage.host/api/1/upload/?key=12345&source=http://somewebsite/someimage.jpg&format=json",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files![0]);
  };

  const handleImageUpload = () => {
    console.log(URL.createObjectURL(selectedImage));
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();

    formData.append("image", selectedImage);

    uploadImage(formData)
      .then((uploadedImage: any) => {})
      .catch((_) => {
        console.log("Oooops, something went wrong!");
      });
  };

  return (
    <Access admin author>
      <div className="p-4 space-y-4 rounded-xl box-shadow">
        <input
          type={"text"}
          name={"title"}
          placeholder={"عنوان مقاله"}
          onChange={titleHandler}
          className="p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl outline-none invalid:border-2 invalid:border-red-600"
        />

        <input
          onChange={handleChange}
          accept=".jpg, .png, .jpeg"
          className="my-4 border-none outline-none"
          type="file"
        />

        <button
          onClick={handleImageUpload}
          disabled={!selectedImage}
          className={`${styles.primaryButton} block disabled:opacity-50 py-3 px-10`}
        >
          اپلود عکس
        </button>
      </div>

      <div className="mt-4 p-4 rounded-xl box-shadow ltr " data-color-mode="light">
        <Suspense fallback={<div>loadiung</div>}>
          <MDEditor value={value} onChange={setValue} className={`article-body !min-h-[37rem]`} color="white" />
        </Suspense>
      </div>

      <button
        onClick={handleImageUpload}
        disabled={!selectedImage || !value || !title}
        className={`${styles.primaryButton} mt-4 block disabled:opacity-50 py-3 px-10`}
      >
        منتشر کردن مقاله
      </button>
    </Access>
  );
}

CreateArticles.PageLayout = PanelLayout;

export default CreateArticles;
