# Valentine's Proposal Website 💕

A beautiful, interactive Valentine's Day proposal website that you can customize and share with your special someone.

## Features

- 🎨 Beautiful, responsive design with romantic styling
- 📱 Mobile-friendly interface
- 🔗 Customizable proposal links with recipient and sender names
- 🚫 Optional "unclickable No button" feature
- 🎉 Animated confetti celebration for "Yes" responses
- ☕ Coffee donation encouragement for good karma
- 📋 Easy link generation and sharing

## How to Use

### Option 1: Use the Live Version

Visit [bemylove.info](https://bemylove.info) to create your proposal link directly.

### Option 2: Host Your Own Version

1. **Fork or clone this repository**
2. **Deploy to GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Create your proposal:**
   - Visit your GitHub Pages URL
   - Enter the recipient's name
   - Optionally enter your name
   - Choose whether to make "No" unclickable
   - Generate and copy the proposal link

4. **Share the link:**
   - Send the generated link to your special someone
   - They can click "Yes" or try to click "No" (if enabled)

## URL Parameters

Your proposal links support these parameters:

- `name`: The recipient's name (required)
- `sender`: Your name (optional)
- `no`: Set to `true` to make the "No" button unclickable (optional)

Example: `https://yourusername.github.io/valentine-proposal/?name=Alice&sender=Bob&no=true`

## Features in Detail

### Creator Mode
- Clean interface for generating proposal links
- Option to make the "No" button unclickable
- One-click link copying

### Proposal Mode
- Personalized greeting with recipient's name
- "Yes" and "No" buttons with hover effects
- Moving "No" button (unless disabled)
- Animated confetti celebration for "Yes"
- Gracious response for "No"

### Mobile Responsive
- Optimized for all screen sizes
- Touch-friendly buttons
- Responsive typography

## Customization

Feel free to customize the colors, messages, and styling by editing:

- `style.css` - Colors, fonts, and layout
- `script.js` - Messages and behavior
- `index.html` - Structure and content

## Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- Vanilla JavaScript (no frameworks required)

## Contributing

Feel free to submit issues, feature requests, or pull requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 💕 for Valentine's Day