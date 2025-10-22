# iOS-Getting started

# Add Form on iOS

This guide explains how to integrate Joyfill iOS SDK into a new or existing iOS project using [SwiftUI](https://developer.apple.com/documentation/SwiftUI) By the end, you’ll be able to display a Form.

## Requirements

- A Mac running macOS
- The [latest stable version of Xcode](https://developer.apple.com/xcode/)

## Creating your project

Skip this step if you’re using an existing project. If you’re starting a new iOS app, follow the steps below.

**Steps:**

1. Open Xcode and select **File** > **New** > **Project**.
2. Select the **iOS** tab and choose the **App** template.
3. Enter your product name (for example, Joyfill-Demo) and organization identifier (for example, com.example).
4. Click **Next**, choose a location to save the project, and click **Create**.

## Adding Joyfill to your project

**Steps:**

1. In Xcode, select your project.
2. Go to the **Package Dependencies** tab and click **+**.
3. Enter the Joyfill Swift Package URL into the search field:
    
    ```swift
    
    https://github.com/joyfill/components-swift.git
    
    ```
    
4. In the **Dependency Rule** fields, select:
    - **Version** > **Up to Next Minor** — for controlled updates
5. Click **Add Package**. Confirm the addition.
    
    > In this confirmation step, ensure that the Add to Target column displays the correct target (usually the app target), and that the checkbox on the left is selected. For many projects — especially newly created ones — there will only be one target, so you can click the Add Package button again. However, for more complex projects with multiple targets, it’s important to double-check this setting.
    > 

Joyfill will now appear under **Swift Package Dependencies**.

## Displaying a Form

**Steps:**

1. Add your JSON file to the project by dragging it into the Xcode project navigator. Click **Finish** when prompted.
1.1  Here is an example json you can use [first-form.json](https://github.com/joyfill/components-swift/blob/update-readme-file/JoyfillSwiftUIExample/JoyfillExample/Simple%20Form%20Example/first-form.json)
2. In your SwiftUI view, import the Joyfill SDK:
    
    ### Swift
    
    ```swift
    import Joyfill
    import JoyfillModel
    ```
    
3. Display the Form using the following code:
    
    ### Swift
    
    ```swift
    import Joyfill
    import JoyfillModel
    
    struct SimpleFormExampleView: View {
        let documentEditor: DocumentEditor
        let document = loadDoc(named: "first-form")
        
        init() {
            self.documentEditor = DocumentEditor(document: document)
        }
    
        var body: some View {
            Form(documentEditor: documentEditor)
        }
    }
    
    private extension SimpleFormExampleView {
        static func loadDoc(named name: String) -> JoyDoc {
            let url = Bundle.main.url(forResource: name, withExtension: "json")!
            let data = try! Data(contentsOf: url)
            let dict = try! JSONSerialization.jsonObject(with: data) as! [String: Any]
            return JoyDoc(dictionary: dict)
        }
    }
    ```
    
4. Build and run your application.

You’ll now see your First Form document displayed using Joyfill built-in UI.

## Listen for form changes

The Joyfill SDK provides comprehensive event handling through the **FormChangeEvent** protocol, allowing you to respond to user interactions, data changes, file uploads, and errors in real-time.

**Create an Event Handler**

Implement the FormChangeEvent protocol:

```swift
import Joyfill
import JoyfillModel

final class ChangeHandler: FormChangeEvent {
    func onChange(changes: [Joyfill.Change], document: JoyfillModel.JoyDoc) {
        // Persist, sync, or react to changes
        if let firstChange = changes.first {
            print(">>>>>>>>onChange", firstChange.change ?? "")
        }
    }

    func onFocus(event: Joyfill.FieldIdentifier) {
        // Field focused
    }

    func onBlur(event: Joyfill.FieldIdentifier) {
        // Field blurred
    }

    func onUpload(event: Joyfill.UploadEvent) {
        // File(s) uploaded/removed
    }

    func onCapture(event: Joyfill.CaptureEvent) {
        // Media captured (e.g., camera)
    }

    func onError(error: Joyfill.JoyfillError) {
        // Schema validation/version or runtime errors
    }
}
```

**Connect to DocumentEditor**

Pass your event handler to the DocumentEditor:

```swift
let handler = ChangeHandler()
let editor = DocumentEditor(document: myDocument, events: handler)
```