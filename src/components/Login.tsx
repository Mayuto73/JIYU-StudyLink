import React from 'react';
import { loginWithGoogle } from '../firebase';
import { BookOpen } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <BookOpen className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-stone-900">
          自由学園 ラーニングコモンズ
        </h2>
        <p className="mt-2 text-center text-sm text-stone-600">
          教えたい人と教わりたい人をつなぐプラットフォーム
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <button
            onClick={loginWithGoogle}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Googleでログイン
          </button>
        </div>
      </div>
    </div>
  );
}
