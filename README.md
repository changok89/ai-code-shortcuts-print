# AI Code Shortcuts Print

Claude Code, Codex, Gemini Code를 A4 한 장으로 출력해 옆에 둘 수 있게 만든 정적 웹사이트.

## 포함 페이지
- `index.html`
- `combined.html`
- `claude-code.html`
- `codex.html`
- `gemini-code.html`

## 로컬 실행
정적 사이트라서 HTML 파일을 직접 열어도 되고, 간단한 로컬 서버를 띄워도 된다.

### Python 예시
```bash
python3 -m http.server 8080
```
브라우저에서 아래 주소 열기:
```text
http://localhost:8080
```

## 출력 권장 설정
- 용지: A4
- 방향: 세로(Portrait)
- 배율: 100%
- 브라우저 기본 여백 사용 가능
- 배경 그래픽은 켜거나 꺼도 되지만, 색 구분을 살리려면 켜는 편이 낫다

## 인쇄 방법
각 툴 페이지에서 **인쇄** 버튼을 누르면 브라우저 인쇄 대화상자가 열린다.
출력용 레이아웃은 A4 한 장 기준으로 맞춰져 있다.

## GitHub Pages 배포
이 프로젝트는 별도 빌드가 없는 정적 사이트다.

### 방법 1: 저장소 루트 배포
- GitHub에 push
- 저장소 Settings → Pages에서 기본 브랜치의 루트를 배포 대상으로 선택

### 방법 2: 다른 정적 호스팅 사용
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel 정적 배포

## 참고
직접 파일을 열어도 동작하지만, 상대 경로나 브라우저 인쇄 동작을 확인하려면 로컬 서버 방식이 더 편하다.
