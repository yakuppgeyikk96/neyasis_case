import { getProfile } from "@/services/profileService"

export const fetchProfile = () => {
  return async (dispatch) => {
    const profileData = await getProfile();
    
    dispatch({
      type: 'GET_PROFILE_INFOS',
      payload: profileData
    });
  }
}