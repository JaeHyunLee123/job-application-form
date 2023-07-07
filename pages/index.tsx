import React from "react";
import { useForm } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form";

const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

//tailwind css
const TEXT_INPUT = "px-2 py-1 rounded-lg border-2 border-black";
const RADIO =
  "mr-2 appearance-none w-2 h-2 rounded-full ring-1 ring-offset-2 ring-black transition bg-white checked:bg-black";
const MIDDLE_TITLE = "font-semibold text-[17px] ";
const ERROR_MESSAGE = "text-red-500 text-sm";

export default () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const radioValidationOption: RegisterOptions = { required: "*required" };

  console.log(errors);

  const onValid = () => {};

  return (
    <div className="py-5">
      <div className="w-[500px] bg-pink-100 px-8 py-10 mx-auto border border-r-2 border-b-2 rounded-lg border-black">
        <h1 className="text-center font-bold text-xl mb-5">
          Job Application Form
        </h1>
        <form className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <div className="flex space-x-1">
              <h2 className={cls(MIDDLE_TITLE)}>
                What department do you want to work for?
              </h2>
              <span className={cls(ERROR_MESSAGE)}>*required</span>
            </div>

            <div className="flex flex-col px-2">
              <div className="flex items-center">
                <input
                  {...register("department", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="sales"
                  id="sales"
                />
                <label htmlFor="sales">Sales</label>
              </div>
              <div>
                <input
                  {...register("department", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="marketing"
                  id="marketing"
                />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <div>
                <input
                  {...register("department", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="accounting"
                  id="accounting"
                />
                <label htmlFor="accounting">Accounting</label>
              </div>
              <div>
                <input
                  {...register("department", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="customerservice"
                  id="customerservice"
                />
                <label htmlFor="customerservice">Customer service</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex space-x-1">
              <h2 className={cls(MIDDLE_TITLE)}>
                Why do you want to join this company?
              </h2>
              <span className={cls(ERROR_MESSAGE)}>*required</span>
            </div>

            <div className="flex flex-col px-2">
              <div>
                <input
                  {...register("motivation", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="money"
                  id="money"
                />
                <label htmlFor="money">I want money!</label>
              </div>
              <div>
                <input
                  {...register("motivation", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="love"
                  id="love"
                />
                <label htmlFor="love">I love this company</label>
              </div>
              <div>
                <input
                  {...register("motivation", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="learn"
                  id="learn"
                />
                <label htmlFor="learn">I want to learn</label>
              </div>
              <div>
                <input
                  {...register("motivation", radioValidationOption)}
                  className={cls(RADIO)}
                  type="radio"
                  value="noidea"
                  id="noidea"
                />
                <label htmlFor="noidea">I don't know why</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className={cls(MIDDLE_TITLE)}>Salary</h2>
            <select {...register("salary")} className={cls(TEXT_INPUT)}>
              <option value="50">$50K</option>
              <option value="100">$100K</option>
              <option value="150">$150K</option>
              <option value="200">$200K</option>
            </select>
          </div>
          <div className="flex flex-col">
            <h2 className={cls(MIDDLE_TITLE)}>Introduce yourself</h2>
            <input {...register("introduce")} className={cls(TEXT_INPUT)} />
            <span className={cls(ERROR_MESSAGE)}>errormeesga</span>
          </div>
          <div className="flex flex-col">
            <h2 className={cls(MIDDLE_TITLE)}>
              {" "}
              Tell us what is your dreams are
            </h2>
            <textarea
              {...register("dreams")}
              className={cls(TEXT_INPUT)}
              rows={5}
            />
            <span className={cls(ERROR_MESSAGE)}>*required</span>
          </div>
          <div className="flex flex-col">
            <h2 className={cls(MIDDLE_TITLE)}>Email</h2>
            <input {...register("email")} className={cls(TEXT_INPUT)} />
            <span className={cls(ERROR_MESSAGE)}>*required</span>
          </div>
          <button
            className="py-2 rounded-lg bg-yellow-300 border border-b-2 border-r-2 border-black font-semibold"
            type="submit"
          >
            Give me this job
          </button>
        </form>
      </div>
    </div>
  );
};

// 전체사진 : 전부 required
// dreams 10자 이상
// email 오직 naver.com만
// 제출버튼 눌렀을때 form에 입력한 data가 아래에 마지막 사진처럼 출력되도록
