import React from 'react';
import { useForm } from 'react-hook-form';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-5">이메일과 비밀번호를 입력해주세요</h2>
      <form className="w-1/3 p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            이메일 주소
          </label>
          <input 
            className="border focus:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="text" 
            placeholder="email"
            {...register("email", { required: "이메일은 필수입니다.",pattern: {
              value: /^\S+@\S+$/i, 
              message: "잘못된 이메일 형식입니다."} })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            비밀번호
          </label>
          <input 
            className="border focus:border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            {...register("password", { required: "비밀번호는 필수입니다." })}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>
        <div className="flex justify-center">
          <button 
            className="bg-[#112839] hover:bg-yellow-500 text-white font-bold w-40 py-2 rounded-lg" 
            type="submit"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
