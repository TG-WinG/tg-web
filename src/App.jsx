import { StrictMode } from "react";
import NoticeBoard from "./components/NoticeBoard";
import NoticeBoardPage from "./pages/NoticeBoardPage";

export function App() {
	return (
		<StrictMode>
			<NoticeBoardPage/>
			{/* <h1>Hello, world!</h1> */}
		</StrictMode>
	);
}