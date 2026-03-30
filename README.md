# AI Code Shortcuts Print

Claude Code, Codex, Gemini Code, Qwen Code를 A4 한 장으로 출력해 옆에 둘 수 있게 만든 정적 웹사이트.

## 포함 페이지
- `index.html`
- `combined.html`
- `claude-code.html`
- `codex.html`
- `gemini-code.html`
- `qwen-code.html`

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

## 기능
- 모바일 / 태블릿 / PC 반응형 치트시트 레이아웃
- 컬러 / 흑백 전환 토글
- 개별 도구 출력 페이지
- 세 도구+Qwen을 한 번에 인쇄할 수 있는 통합 출력 페이지
- 브라우저의 PDF 저장 기능에 맞춘 출력용 레이아웃

## PDF 저장 팁
- 각 페이지에서 **인쇄** 버튼 클릭
- 프린터를 **Save as PDF** 또는 브라우저 PDF 저장으로 선택
- `combined.html`은 여러 장짜리 PDF 팩처럼 저장하기 좋음
- 개별 페이지는 한 장짜리 출력본으로 저장하기 좋음
