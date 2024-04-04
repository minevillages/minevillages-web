import Router from 'preact-router';
import { HomePage } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { RootPage } from './pages/Root';

export default function App() {
    return (
        <RootPage>
            <Router>
                <HomePage path="/" />
                
                {/* @ts-ignore - default 속성은 예약어이므로 부득이하게 속성을 선언하지 못했습니다. */}
                <NotFound default />
            </Router>
        </RootPage>
    )
}