"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RichTextEditor } from "../../../../../../components/reusable/Editor";

interface PrivacyPolicyFormData {
  explanation: string;
}

export default function UpdatePrivacyPolicyPage() {
  const [editorKey] = useState(0);

  const { watch, setValue, handleSubmit } = useForm<PrivacyPolicyFormData>({
    defaultValues: {
      explanation: "",
    },
  });

  const onSubmit = async (data: PrivacyPolicyFormData) => {
    console.log("Form submitted:", data);
    // Add your save logic here
  };
  return (
    <div className="bg-[#E6F5F0] p-4 md:p-8 rounded-[12px] mt-6">
      <h1 className="text-2xl font-semibold text-[#08A270] mb-4">
        Privacy Policy
      </h1>
      <hr className="border-t border-[#777980] mb-8" />
      {/* Editor */}
      <div className="">
        <RichTextEditor
          key={`explanation-${editorKey}`}
          value={watch("explanation")}
          onChange={(v) => setValue("explanation", v)}
          onUpdate={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
