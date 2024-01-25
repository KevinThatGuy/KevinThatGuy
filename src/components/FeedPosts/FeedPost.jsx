import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			<PostHeader post={post} creatorProfile={userProfile} />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={post.imageURL} alt={"FEED POST IMG"} maxH={"100%"} maxW={"100%"} minH={"100%"} minW={"100%"}/>
			</Box>
			<PostFooter post={post} creatorProfile={userProfile} />
		</>
	);
};
 /*Final*/
export default FeedPost;
