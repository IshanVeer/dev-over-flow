"use client";
import React, { useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Editor } from "@tinymce/tinymce-react";
import { AnswerSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "../ui/button";
import Image from "next/image";
import { createAnswer } from "@/lib/actions/answer.action";
import { usePathname } from "next/navigation";

export interface Props {
  author: string;
  questionId: string;
}

const AnswerForm = ({ author, questionId }: Props) => {
  const { mode } = useTheme();
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  // define form
  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      answer: "",
    },
  });
  //   initialising editor ref
  const editorRef = useRef(null);

  //   submit handler
  async function onSubmit(values: z.infer<typeof AnswerSchema>) {
    setIsSubmitting(true);

    try {
      await createAnswer({
        content: values.answer,
        path: pathname,
        author: JSON.parse(author),
        question: JSON.parse(questionId),
      });
    } catch (error) {
      console.log(error, "error");
      throw error;
    }

    setIsSubmitting(false);
    console.log("form submitted");
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="paragraph-semibold text-dark200_light900 ">
          Write your answer here
        </h3>
        <Button className="btn light-border-2  w-fit gap-x-2 border  p-1 px-4 py-2  ">
          <Image
            src="/assets/icons/stars.svg"
            width={15}
            height={15}
            alt="AI"
          />
          <span className="text-primary-gradient">Generate AI answer</span>
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => {
                      field.onChange(content);
                    }}
                    // @ts-ignore
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "codesample",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo " +
                        "bold italic forecolor codesample | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist ",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                      skin: mode === "dark" ? "oxide-dark" : "oxide",
                      content_css: mode === "dark" ? "dark" : "light",
                    }}
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="primary-gradient paragraph-medium hover:primary-hover-gradient mt-4 inline-block w-fit p-1 px-4 py-2 font-medium text-light-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post Answer"}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AnswerForm;
