import mainApi from '../mainApi';

/*                      WRITE YOUR OWN TYPES FOR QUERIES                         */

export const authEndpoints = mainApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<unknown, unknown>({
      query: (_) => ({
        url: '',
        method: 'POST',
        body: _,
      }),
    }),
    signIn: build.mutation<unknown, unknown>({
      query: (_) => ({
        url: '',
        method: 'POST',
        body: _,
      }),
    }),
  }),
  overrideExisting: false,
});
