# open preview

Maybe someone is looking for this: Editor -> Canvas (Alt + Command + Enter)

package manager for iOS is cocoapods

## install

```bash
sudo gem install cocoapods
```

1. need to create `Podfile` in Xcode project directory.
2. to initialize Xcode project with `Podfile` – `pod init`
3. to install dependencies – `pod install`
4. Make sure to always open the Xcode workspace instead of the project file when building your project:

```bash
open App.xcworkspace
```

- command+click to inspect code from editor

## code formatting

1. install [swimat](https://github.com/Jintin/Swimat)
2. `[Xcode] -> [Preferences..] -> [Key Bindings]`
3.

```
brew cask install swimat
```

## troubleshooting

[framework not found Pods](https://stackoverflow.com/questions/29865899/ld-framework-not-found-pods)
Remove Pods.framework in:

- Folder named Pods
- Linked Frameworks and Libraries

[Singing for App requires a development team. Select a development team in the Signing & Capabilities editor](https://stackoverflow.com/questions/39524148/xcode-error-code-signing-is-required-for-product-type-application-in-sdk-ios)

## icons

- [specification](https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/)
- [Macos App with all icons](https://developer.apple.com/sf-symbols/)

[async images](https://www.vadimbulavin.com/asynchronous-swiftui-image-loading-from-url-with-combine-and-swift/)
