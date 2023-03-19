import { getPersonalInfos } from "@/services/profileService";

export const fetchPersonalInfos = () => {
  return async (dispatch) => {
    const personalInfos = await getPersonalInfos();
    dispatch({
      type: 'GET_PERSONAL_INFOS',
      payload: personalInfos
    });
  }
}