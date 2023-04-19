import React from "react";

import Input from "./input";
import { styles } from "../../styles";

function EditProfile() {
  return (
    <section>
      <form>
        <Input id="name" name="name" title="نام و نام خانوادگی" type="text" placeHolder="برای مثال احمد موسوی" />
        <Input id="position" name="position" title="عنوان" type="text" placeHolder="برای مثال دانش جو" />
        <div className="mt-3 w-full space-y-2">
          <label htmlFor={"about"} className="block text-secondary">
            درباره ی من
          </label>
          <textarea
            id={"about"}
            name={"about"}
            placeholder={"برای مثال یک دانشجو..."}
            className={`p-3 w-full text-sm md:text-base text-secondary bg-dim-secondary rounded-xl outline-none min-h-[10rem] max-h-[15rem]`}
          ></textarea>
        </div>

        <button className={`${styles.primaryButton} mt-2 py-3 px-10 hover:scale-[1.05]`}>اعمال تغییر</button>
      </form>
    </section>
  );
}

export default EditProfile;
