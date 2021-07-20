import { connect } from 'react-redux';
import './App.css';
import {
	getPosts as getPostsAction,
	deletePost as deletePostAction,
} from './redux/modules/posts';
import Post from './components/Post';
import { useEffect } from 'react';
import CreatePost from './components/CreatePost';

function App({ posts, getPosts, deletePost }) {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className='App'>
			<CreatePost />
			{posts.length &&
				posts.map((item) => (
					<Post
						key={`post${item.id}`}
						id={item.id}
						deletePost={deletePost}
						title={item.title}
						body={item.body}
					/>
				))}
		</div>
	);
}

// Чтобы подключить компонент к редаксу нужно обергуть его в функцию connect()
export default connect(
	// Беру данные (mapStateToProps)
	({ posts }) => ({ posts: posts.posts }),
	// Диспатчу функции для отправки данных
	{
		getPosts: getPostsAction,
		deletePost: deletePostAction,
	}
)(App);
