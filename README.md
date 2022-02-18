
# Simple blog client

Client for Simple blog


## Tech Stack

**Language:** [Typescript](https://www.typescriptlang.org/)

**Frontend Library:** [React](https://reactjs.org/)

**UI Framework:** [ChakraUI](https://chakra-ui.com/)

**State Management**: [Jotai](https://jotai.org/)

**Utils:** [React Hook Form](https://react-hook-form.com/)

**Testing:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

**Api requests:** [axios](https://axios-http.com/docs/intro), [react-query](https://react-query.tanstack.com/)

**Linter:** [eslint](https://eslint.org/)

**Icons:** [react-icons](https://react-icons.github.io/react-icons/)

## Routes

### User

```
/profile
```
| Auth | Query Params | Description |
| --- | --- | --- |
| User\|Admin | No params | User profile page |

```
/profile/favorite
```
| Auth | Query Params | Description |
| --- | --- | --- |
| User\|Admin | No params | All post starred by current user |

### Home page

```
/
```
| Auth | Query Params | Description |
| --- | --- | --- |
| - | No params | Home page with login or register invitation |

### Login

```
/login
```
| Auth | Query Params | Description |
| --- | --- | --- |
| - | No params | Login form |


### Register

```
/register
```

| Auth | Query Params | Description |
| --- | --- | --- |
| - | No params | Register form |

### Blogs

```
/posts
```
| Auth | Query Params | Description |
| --- | --- | --- |
| User \| Admin | `?page: Integer` | List of shortened block posts with pagination |

```
/posts/:slug
```
| Auth | Query Params | Description |
| --- | --- | --- |
| User \| Admin | `slug: String` | Blog post by slug with comments |


### Admin dashboard

```
/admin
```
| Auth | Query Params | Description |
| --- | --- | --- |
| Admin | No params | All posts with edit and delete functions |

```
/admin/create-post
```

| Auth | Query Params | Description |
| --- | --- | --- |
| Admin | No params | Create new post form |

```
/admin/edit-post/:slug
```

| Auth | Query Params | Description |
| --- | --- | --- |
| Admin | `slug: String` | Edit form for post with given name |





## Feedback

If you have any feedback, please reach out to me at tyrkinn@pm.me


## Authors

- [@tyrkinn](https://github.com/tyrkinn)


## License

[MIT](https://choosealicense.com/licenses/mit/)
