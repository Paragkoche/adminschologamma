import { findCommitteeNameById } from "@/utils/findNameCommitteeById";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfileClientCard({
  BT_ID,
  DOB,
  position,
  type,
  linkedinUrl,
  facebookUrl,
  instragramUrl,
  currentYear,
  photoUrl,
  description,
  skill,
  cgpa,
  hobby,
  name,
  year,

  _id,
}) {
  return (
    <div className="mx-[15px] my-[15px]">
      <div class="w-[319px] h-[440px]">
        <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
            <Image
              width={200}
              height={200}
              class="w-32 h-32 rounded-full mx-auto"
              src={photoUrl}
              alt="name"
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {name}
            </h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
              <p>{position}</p>
              <p>{findCommitteeNameById(type)}</p>
            </div>
            <table class="text-xs my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">DOB:</td>
                  <td class="px-2 py-2">{DOB}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">skill :</td>
                  <td class="px-2 py-2">{skill.substring(0, 40)}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">hobby :</td>
                  <td class="px-2 py-2">{hobby}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              {/* <Link  href={`/teamscard/teamcarddetail/${_id}?year=2023`}>
                <p class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" >View Profile</p>
                </Link> */}

              <Link
                href={{
                  pathname: `/teamscard/teamcarddetail/${BT_ID}`,
                  query: { year: "2023" },
                }}
              >
                <p class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">
                  View Profile
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
