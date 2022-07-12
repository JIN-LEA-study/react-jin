// http://localhost:3000/:username/settings
// http://localhost:3000/coffee/settings <- 중간에 다이나믹한 경로 들어올 때

import { useRouter } from "next/router";

export default function UsernameSettings() {
  const router = useRouter();

  const { username } = router.query;

  return (
    <div>
      <h1>{username}/settings</h1>
    </div>
  );
}
