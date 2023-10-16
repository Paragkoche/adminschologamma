import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function POST(request) {
  const { path } = await request.json();
  // console.log(path)
  if (!path) {
    return NextResponse.json(
      { message: "Image path is required" },
      { status: 400 },
    );
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      // transformation: [{ width: 1000, height: 752, crop: "scale" }],
    };
    console.log("I'm in route.js");

    const result = await cloudinary.uploader.upload(path, options);
    console.log("I'm in route.js 2");

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    // Access the error as a string for the error message
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
