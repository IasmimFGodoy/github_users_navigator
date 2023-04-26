import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import classes from "./ReposPage.module.css";
const ReposPage = () => {
    const { login } = useParams<{ login: string }>();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/${login}/repos?per_page=100`
            );
            const data = await response.json();
            setRepos(data);
        };
        fetchRepos();
    }, [login]);

    return (
        <div className={classes.repo}>
            <h2>Top 5 Melhores repositórios de {login}</h2>
            <ul className={classes.repo_list}>
                {repos
                    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 5)
                    .map((repo: any) => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                {repo.name} ({repo.stargazers_count} estrelas)
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className={classes.back}>
                <Link to={`/`}><FaArrowLeft /> Voltar</Link>
            </div>
        </div>
    );
};
export default ReposPage;