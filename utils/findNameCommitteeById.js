import { committeedataList } from "@/constants";

export const findCommitteeNameById = (committeId) => {
  const obj = committeedataList.find((item) => item._id === committeId);
  return obj ? obj.name : "NA";
};
