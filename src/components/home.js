import react, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-card">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):''
    }
}

