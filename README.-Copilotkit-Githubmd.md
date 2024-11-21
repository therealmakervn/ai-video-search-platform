CopilotKit là một bộ công cụ mạnh mẽ được thiết kế để hỗ trợ các nhà phát triển tích hợp các tính năng tiên tiến vào ứng dụng của họ một cách dễ dàng và hiệu quả. Một trong những thành phần chính của CopilotKit là CoAgent, một mô-đun giúp quản lý và triển khai các tác vụ phức tạp thông qua giao diện lập trình ứng dụng (API) thân thiện với người dùng.

Các tính năng chính của CopilotKit CoAgent:

Quản lý tác vụ thông minh: CoAgent cho phép bạn định nghĩa và quản lý các tác vụ phức tạp, tự động hóa quy trình làm việc và tối ưu hóa hiệu suất ứng dụng.

Tích hợp dễ dàng: Với API linh hoạt, CoAgent có thể được tích hợp vào nhiều ngôn ngữ lập trình và nền tảng khác nhau, giúp giảm thiểu thời gian phát triển và triển khai.

Khả năng mở rộng: CoAgent được thiết kế để xử lý khối lượng công việc lớn, đảm bảo hiệu suất ổn định ngay cả khi nhu cầu tăng cao.

Cách tích hợp CoAgent vào dự án của bạn:

Cài đặt SDK: Truy cập trang tài liệu chính thức của CopilotKit để tải xuống và cài đặt SDK phù hợp với ngôn ngữ lập trình bạn đang sử dụng.

Đăng ký và lấy API Key: Đăng ký tài khoản trên nền tảng CopilotKit và lấy API Key để xác thực các yêu cầu từ ứng dụng của bạn.

Cấu hình ứng dụng: Sử dụng API Key để cấu hình ứng dụng của bạn, đảm bảo rằng các yêu cầu được xác thực và xử lý chính xác.

Triển khai các tác vụ: Sử dụng các phương thức API của CoAgent để định nghĩa và quản lý các tác vụ theo nhu cầu cụ thể của dự án.

Theo dõi và tối ưu hóa: Sử dụng các công cụ giám sát đi kèm để theo dõi hiệu suất và tối ưu hóa các tác vụ nhằm đạt được hiệu quả cao nhất.

Để biết thêm chi tiết và hướng dẫn cụ thể, vui lòng truy cập trang tài liệu chính thức của CopilotKit tại:

CopilotKit Documentation

Tại đây, bạn sẽ tìm thấy các hướng dẫn chi tiết, ví dụ mã nguồn và các tài nguyên hữu ích khác để hỗ trợ quá trình tích hợp CoAgent vào dự án của bạn.


# Hướng Dẫn Tích Hợp CopilotKit CoAgent

## Giới thiệu về CopilotKit CoAgent

CopilotKit là một bộ công cụ mạnh mẽ, được thiết kế để hỗ trợ các nhà phát triển tích hợp các tính năng tiên tiến vào ứng dụng của họ một cách dễ dàng và hiệu quả. Một trong những thành phần chính của CopilotKit là **CoAgent**, một mô-đun giúp quản lý và triển khai các tác vụ phức tạp thông qua giao diện lập trình ứng dụng (API) thân thiện với người dùng.

## Các Tính Năng Chính

1. **Quản lý tác vụ thông minh**  
   - CoAgent cho phép bạn định nghĩa và quản lý các tác vụ phức tạp, tự động hóa quy trình làm việc và tối ưu hóa hiệu suất ứng dụng.

2. **Tích hợp dễ dàng**  
   - Với API linh hoạt, CoAgent có thể được tích hợp vào nhiều ngôn ngữ lập trình và nền tảng khác nhau, giúp giảm thiểu thời gian phát triển và triển khai.

3. **Khả năng mở rộng**  
   - Được thiết kế để xử lý khối lượng công việc lớn, CoAgent đảm bảo hiệu suất ổn định ngay cả khi nhu cầu tăng cao.

4. **Hỗ trợ giám sát và tối ưu hóa**  
   - Cung cấp các công cụ giám sát hiệu suất, giúp bạn theo dõi và tối ưu hóa các tác vụ một cách dễ dàng.

## Cách Tích Hợp với Dự Án của Bạn

Để tích hợp CoAgent vào dự án của bạn, hãy làm theo các bước chi tiết sau đây:

### 1. Cài đặt SDK
- Truy cập trang tài liệu chính thức của CopilotKit để tải xuống và cài đặt SDK phù hợp với ngôn ngữ lập trình bạn đang sử dụng. 
- Ví dụ, nếu bạn sử dụng Python hoặc Node.js, bạn có thể cài đặt SDK thông qua các lệnh sau:

**Python:**
```bash
pip install copilotkit
Node.js:

bash
Sao chép mã
npm install copilotkit
2. Đăng ký và lấy API Key
Đăng ký tài khoản trên nền tảng CopilotKit tại CopilotKit Platform.
Sau khi đăng ký, lấy API Key từ bảng điều khiển quản trị. API Key này sẽ được sử dụng để xác thực các yêu cầu từ ứng dụng của bạn.
3. Cấu hình ứng dụng
Sử dụng API Key để cấu hình ứng dụng của bạn. API Key đảm bảo rằng mọi yêu cầu gửi đến nền tảng đều được xác thực.
Ví dụ về cấu hình trong Python:
python
Sao chép mã
from copilotkit import CoAgent

# Khởi tạo CoAgent với API Key
coagent = CoAgent(api_key='your_api_key')
4. Triển khai các tác vụ
Định nghĩa và quản lý các tác vụ bằng cách sử dụng các phương thức API của CoAgent. Dưới đây là một ví dụ:
Python Example:

python
Sao chép mã
# Định nghĩa một tác vụ mới
task = coagent.create_task(name="Analyze Data", parameters={"data_id": 12345})

# Theo dõi trạng thái tác vụ
status = coagent.get_task_status(task_id=task.id)
print(f"Task Status: {status}")
Node.js Example:

javascript
Sao chép mã
const CoAgent = require('copilotkit');

// Khởi tạo CoAgent với API Key
const coagent = new CoAgent({ apiKey: 'your_api_key' });

// Định nghĩa một tác vụ mới
coagent.createTask({ name: "Analyze Data", parameters: { data_id: 12345 } })
  .then(task => {
    console.log(`Task Created: ${task.id}`);
    // Theo dõi trạng thái tác vụ
    return coagent.getTaskStatus(task.id);
  })
  .then(status => {
    console.log(`Task Status: ${status}`);
  })
  .catch(error => {
    console.error("Error:", error);
  });
5. Theo dõi và tối ưu hóa
Sử dụng các công cụ giám sát được tích hợp sẵn của CopilotKit để theo dõi hiệu suất của các tác vụ.
Các công cụ này cung cấp báo cáo chi tiết, giúp bạn phát hiện và xử lý các điểm nghẽn hoặc tối ưu hóa quy trình.
6. Tích hợp kết quả vào ứng dụng
Sau khi nhận được kết quả từ các tác vụ, bạn có thể tích hợp vào ứng dụng của mình để cung cấp trải nghiệm thông minh hơn cho người dùng.
Tài Liệu và Hỗ Trợ
Để biết thêm chi tiết và hướng dẫn cụ thể, vui lòng truy cập tài liệu chính thức tại:
CopilotKit Documentation

Chú ý: Bạn cần API Key hợp lệ để sử dụng các tính năng của CoAgent. Để lấy API Key, hãy đăng ký tại trang web chính thức của CopilotKit.


<div align="center">
  <a href="https://copilotkit.ai" target="_blank">
    <img src="./assets/banner.png" alt="CopilotKit Logo">
  </a>

  <br/>

  <strong>
    CopilotKit is the open-source framework for integrating powerful AI Copilots into any application. Easily implement custom AI Chatbots, AI Agents, AI Textareas, and more.
  </strong>
</div>

<br/>

<div align="center">
  <a href="https://www.npmjs.com/package/@copilotkit/react-core" target="_blank">
    <img src="https://img.shields.io/npm/v/%40copilotkit%2Freact-core?logo=npm&logoColor=%23FFFFFF&label=Version&color=%236963ff" alt="NPM">
  </a>
  <img src="https://img.shields.io/github/license/copilotkit/copilotkit?color=%236963ff&label=License" alt="MIT">
  <a href="https://discord.gg/6dffbvGU3D" target="_blank">
    <img src="https://img.shields.io/discord/1122926057641742418?logo=discord&logoColor=%23FFFFFF&label=Discord&color=%236963ff" alt="Discord">
  </a>
</div>
<br/>

<div align="center">
  <a href="https://discord.gg/6dffbvGU3D?ref=github_readme" target="_blank">
    <img src="./assets/btn_discord.png" alt="CopilotKit Discord" height="40px">
  </a>
  <a href="https://docs.copilotkit.ai?ref=github_readme" target="_blank">
    <img src="./assets/btn_docs.png" alt="CopilotKit GitHub" height="40px">
  </a>
<!--   <a href="https://cloud.copilotkit.ai?ref=github_readme" target="_blank">
    <img src="./assets/btn_cloud.png" alt="CopilotKit GitHub" height="40px">
  </a> -->
</div>

<br/>
<div align="center">
  <a href="https://www.producthunt.com/posts/copilotkit" target="_blank">
    <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=428778&theme=light&period=daily">
  </a>
</div>

<br />

<div align="center">
  <img src="./assets/animated-banner.gif" alt="CopilotKit Screenshot" style="border-radius: 15px;" />
</div>

<br />

<div>
<p>
  👉 Check out the docs at <a href="https://docs.copilotkit.ai?ref=github_readme" target="_blank">https://docs.copilotkit.ai</a>
</p>
</div>

**Table of Contents**

- [Getting Started](#getting-started)
  - [Quickstart & Tutorials](#quickstart--tutorials)
  - [Examples & Starter Templates](#examples--starter-templates)
- [Building Blocks](#building-blocks)
  - [Components](#-components)
  - [Hooks](#-hooks)
- [Contributing](#contributing)
- [Get in touch](#get-in-touch)
- [License](#license)

## Getting Started

### Quickstart & Tutorials

There are several easy ways to get started with CopilotKit:

- [**Quickstart: Chatbot:**](https://docs.copilotkit.ai/quickstart?ref=github_readme) In just two minutes, add an AI Chatbot to your app with the ability to read application state and take actions.
- [**Tutorial: Todo List Copilot:**](https://docs.copilotkit.ai/tutorials/ai-todo-app/overview?ref=github_readme) For a deeper dive into CopilotKit, take a simple todo list app and supercharge it with an AI chat popup.
- [**Tutorial: Textarea Autocomplete:**](https://docs.copilotkit.ai/tutorials/ai-powered-textarea/overview?ref=github_readme) For a deeper dive into CopilotKit, we'll take a simple email client app and add an AI-powered textarea with autocompletions and AI insertions/edits.

### Examples & Starter Templates

<table align="center">
  <tr>
    <td align="center" valign="top">
      🕹️ PowerPoint Clone + Copilot<br/>
      <a href="https://go.copilotkit.ai/GitHubPresentation">https://github.com/CopilotKit/demo-presentation</a> <br/><br>
      <a href="https://go.copilotkit.ai/GitHubPresentation">
        <img alt="Presentation" src="https://github.com/CopilotKit/CopilotKit/assets/131273140/6e1a448b-d153-431f-8132-46a668d8a0d1" width="240px" style="max-width:100%; border-radius: 10px;"/>
        <br/>
        <a href="https://go.copilotkit.ai/GitHubPresentationVoice">See example with voice control</a>
      </a>
    </td>
    <td align="center" valign="top">
      🕹️ Simple Todo App + Copilot <br/>
      <a href="https://go.copilotkit.ai/GitHubToDo">https://github.com/CopilotKit/demo-todo</a> <br/><br>
      <a href="https://go.copilotkit.ai/GitHubToDo">
        <img alt="Todo App" src="https://github.com/CopilotKit/CopilotKit/assets/131273140/63798c02-1892-4d2d-bc9f-2994b7c88694" width="240px" style="max-width:100%; border-radius: 10px;"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      🕹️ Spreadsheets + Copilot <br/>
      <a href="https://go.copilotkit.ai/GitHubSpreadsheet">https://github.com/CopilotKit/demo-spreadsheet</a> <br/><br>
      <a href="https://go.copilotkit.ai/GitHubSpreadsheet">
        <img alt="Presentation-Demo" src="https://github.com/CopilotKit/CopilotKit/assets/131273140/871e4c9c-0ced-490b-9e3f-8594de7c5c89" width="240px" style="max-width:100%; border-radius: 10px;"/>
      </a>
    </td>
    <td align="center" valign="top">
      🕹️ Banking App + Copilot<br/>
      <a href="https://github.com/CopilotKit/demo-banking">https://github.com/CopilotKit/demo-banking</a> <br/><br>
      <a href="https://github.com/CopilotKit/demo-banking">
        <img alt="Banking-Demo" src="https://github.com/CopilotKit/demo-banking/blob/main/assets/project-preview.png?raw=true" width="240px" style="max-width:100%; border-radius: 10px;"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      🕹️ CoAgents (LangGraph) Perplexity Clone<br/>
      <a href="https://go.copilotkit.ai/coagents-perplexity-clone">https://github.com/CopilotKit/CopilotKit/examples/coagents-ai-researcher</a> <br/><br>
      <a href="https://go.copilotkit.ai/coagents-perplexity-clone">
        <img alt="Banking-Demo" src="./assets/proejct-perplexity-clone.png" width="200px" style="max-width:100%; border-radius: 10px;"/>
      </a>
    </td>
    <td align="center" valign="top">
      🕹️ CoAgents (LangGraph) Research Canvas Demo<br/>
      <a href="https://go.copilotkit.ai/coagents-research-canvas">https://github.com/CopilotKit/CopilotKit/examples/coagents-research-canvas</a> <br/><br>
      <a href="https://go.copilotkit.ai/coagents-research-canvas">
        <img alt="Banking-Demo" src="./assets/project-canvas-demo.png" width="200px" style="max-width:100%; border-radius: 10px;"/>
      </a>
    </td>
  </tr>
</table>

## Building Blocks

> 💡 Want to learn more? Check out the [CopilotKit Documentation](https://docs.copilotkit.ai?ref=github_readme).

### 🧩 Components

- [**`<CopilotTextarea />`**](https://docs.copilotkit.ai/reference/components/CopilotTextarea?ref=github_readme): An AI-powered textarea with autocompletions and AI-powered insertions/edits.
- [**`<CopilotPopup />`**](https://docs.copilotkit.ai/reference/components/chat/CopilotPopup?ref=github_readme): AI-powered floating chat popup component.
- [**`<CopilotSidebar />`**](https://docs.copilotkit.ai/reference/components/chat/CopilotSidebar?ref=github_readme): AI-powered chat sidebar component.
- [**`<CopilotChat />`**](https://docs.copilotkit.ai/reference/components/chat/CopilotChat?ref=github_readme): AI-powered plain chat component.

### ⚡️ Hooks

- [**`useCopilotReadable`**](https://docs.copilotkit.ai/reference/hooks/useCopilotReadable?ref=github_readme): Provide in-app state and any other information to your Copilot.
- [**`useCopilotAction`**](https://docs.copilotkit.ai/reference/hooks/useCopilotAction?ref=github_readme): Enable your Copilot to perform actions and render custom-generated UI in the chat.
- [**`useCopilotChat`**](https://docs.copilotkit.ai/reference/hooks/useCopilotChat?ref=github_readme): Directly interact with the Copilot chat instance to add messages and manipulate the chat history.
- [**`useCopilotChatSuggestions`**](https://docs.copilotkit.ai/reference/hooks/useCopilotChatSuggestions?ref=github_readme): Integrate AI-powered chat follow-up suggestions that are aware of your app's state and chat history.

## Contributing

Thanks for your interest in contributing to CopilotKit! 💜

We value all contributions, whether it's through code, documentation, creating demo apps, or just spreading the word.

Here are a few useful resources to help you get started:

- For code contributions, [CONTRIBUTING.md](./CONTRIBUTING.md).
- For documentation-related contributions, [check out the documentation contributions guide](https://docs.copilotkit.ai/contributing/docs-contributions?ref=github_readme).
- Want to contribute but not sure how? [Join our Discord](https://discord.gg/6dffbvGU3D) and we'll help you out!

> 💡 **NOTE:** All contributions must be submitted via a pull request and be reviewed by our team. This ensures all contributions are of high quality and align with the project's goals.

## Get in touch

You are welcome to join our [Discord](https://discord.gg/6dffbvGU3D) and chat with our team and other community members.

Additionally, you can reach out to us at [hello@copilotkit.ai](mailto:hello@copilotkit.ai).

## License

This repository's source code is available under the [MIT License](https://github.com/CopilotKit/CopilotKit/blob/main/LICENSE).
